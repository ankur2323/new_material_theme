import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import {
    Tree,
    MultiBackend,
    getBackendOptions
} from "@minoru/react-dnd-treeview";


const SampleData = [
    {
        "id": 1,
        "parent": 0,
        "droppable": true,
        "text": "Folder 1"
    },
    {
        "id": 2,
        "parent": 1,
        "droppable": false,
        "text": "File 1-1"
    },
    {
        "id": 3,
        "parent": 1,
        "droppable": false,
        "text": "File 1-2"
    },
    {
        "id": 4,
        "parent": 0,
        "droppable": true,
        "text": "Folder 2"
    },
    {
        "id": 5,
        "parent": 4,
        "droppable": true,
        "text": "Folder 2-1"
    },
    {
        "id": 6,
        "parent": 5,
        "droppable": false,
        "text": "File 2-1-1"
    }
]

function TreeTableView() {
    const [treeData, setTreeData] = useState(SampleData);
    const handleDrop = (newTree) => setTreeData(newTree);

    return (
        <div className="app">
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                <Tree
                    tree={treeData}
                    rootId={0}
                    render={(node, {depth, isOpen, onToggle}) => (
                        <div style={{marginInlineStart: depth * 10}}>
                            {node.droppable && (
                                <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
                            )}
                            {node.text}
                        </div>
                    )}
                    dragPreviewRender={(monitorProps) => (
                        <div>{monitorProps.item.text}</div>
                    )}
                    onDrop={handleDrop}
                />
            </DndProvider>
        </div>
    );
}

export default TreeTableView;
