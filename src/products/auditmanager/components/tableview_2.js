import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
} from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Sample data structure
const initialData = [
    {
        id: '1',
        label: 'Parent 1',
        column1: 'Parent 1 Data 1',
        column2: 'Parent 1 Data 2',
        column3: 'Parent 1 Data 3',
        children: [
            {
                id: '2',
                label: 'Child 1',
                column1: 'Child 1 Data 1',
                column2: 'Child 1 Data 2',
                column3: 'Child 1 Data 3',
                children: [
                    {
                        id: '7',
                        label: 'Sub-Child 1',
                        column1: 'Sub-Child 1 Data 1',
                        column2: 'Sub-Child 1 Data 2',
                        column3: 'Sub-Child 1 Data 3',
                    },
                ],
            },
            {
                id: '3',
                label: 'Child 2',
                column1: 'Child 2 Data 1',
                column2: 'Child 2 Data 2',
                column3: 'Child 2 Data 3',
                children: [],  // Allow for droppable children
            },
        ],
    }
];

const TreeTableView = () => {
    const [data, setData] = useState(initialData);
    const [openRows, setOpenRows] = useState({});

    const handleToggleRow = (rowId) => {
        setOpenRows((prev) => ({
            ...prev,
            [rowId]: !prev[rowId],
        }));
    };

    // Get unique keys from the data to generate dynamic headers
    const getUniqueKeys = (data) => {
        const keys = new Set();
        data.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if (key !== 'id' && key !== 'children') {
                    keys.add(key);
                }
            });
        });
        return Array.from(keys);
    };

    const headers = getUniqueKeys(data);

    // Handle drag end
    const handleDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        // Find the item being dragged
        const sourceParentId = source.droppableId;
        const destinationParentId = destination.droppableId;
        const itemId = result.draggableId;

        // Find the source and destination parent nodes
        const sourceParent = findNodeById(data, sourceParentId);
        const destinationParent = findNodeById(data, destinationParentId);

        // Find and remove the dragged item from its source location
        const itemIndex = sourceParent.children.findIndex((child) => child.id === itemId);
        const [draggedItem] = sourceParent.children.splice(itemIndex, 1);

        // Insert the dragged item into the destination location
        destinationParent.children.splice(destination.index, 0, draggedItem);

        setData([...data]);
        // Ensure the destination row is expanded when an item is dropped into it
        setOpenRows((prev) => ({
            ...prev,
            [destinationParentId]: true,
        }));
    };

    const findNodeById = (nodes, id) => {
        for (const node of nodes) {
            if (node.id === id) {
                return node;
            }
            if (node.children) {
                const found = findNodeById(node.children, id);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };

    const renderTreeRows = (nodes, level = 0) => {
        const paddingLeft = level * 20; // Indentation for child elements

        return (
            <React.Fragment key={nodes.id}>
                <Draggable draggableId={nodes.id} index={level} key={nodes.id}>
                    {(provided) => (
                        <TableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <TableCell style={{ paddingLeft: `${paddingLeft}px` }}>
                                {nodes.children && nodes.children.length > 0 && (
                                    <IconButton onClick={() => handleToggleRow(nodes.id)}>
                                        {openRows[nodes.id] ? <ExpandMore /> : <ChevronRight />}
                                    </IconButton>
                                )}
                                {nodes.label}
                            </TableCell>
                            {Object.keys(nodes).map((key, index) => {
                                if (key !== 'id' && key !== 'label' && key !== 'children') {
                                    return <TableCell key={index}>{nodes[key]}</TableCell>;
                                }
                                return null;
                            })}
                        </TableRow>
                    )}
                </Draggable>
                {nodes.children && nodes.children.length > 0 && (
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={Object.keys(nodes).length - 1}>
                            <Collapse in={openRows[nodes.id]} timeout="auto" unmountOnExit>
                                <div style={{ paddingLeft: '16px' }}>
                                    <Droppable droppableId={nodes.id} type="child">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {nodes.children.map((child, index) =>
                                                    renderTreeRows(child, level + 1)
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                )}
            </React.Fragment>
        );
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tree View</TableCell>
                            {headers.map((header, index) => (
                                <TableCell key={index}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((parent, index) => (
                            <Droppable droppableId={parent.id} key={parent.id} type="parent">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {renderTreeRows(parent, 0)}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DragDropContext>
    );
};

export default TreeTableView;
