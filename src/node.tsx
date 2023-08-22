import React from 'react';

interface myNode {
    value: number;
    next: Node;
    behind: Node;

    getValue(): number;
    getNext(): Node;
    getBehind(): Node;
}

export default myNode;




