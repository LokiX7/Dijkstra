import { Dijkstra, GraphI } from './dijkstra.js';

const a_graph: GraphI = {
    'start': {
        'a': 5,
        'b': 2,
    },
    
    'a': {
        'c': 8,
        'd': 2,
    },
    
    'b': {
        'a': 8,
        'd': 7,
    },
    
    'c': {
        'end': 3,
        'd': 6,
    },
    
    'd': {
        'end': 1,
    },
    
    'end': {},
}

const b_graph: GraphI = {
    'start': {
        'a': 10,
    },
    
    'a': {
        'b': 20,
    },
    
    'b': {
        'c': 1,
        'end': 30,
    },
    
    'c': {
        'a': 1,
    },
    
    'end': {},
}


const c_graph: GraphI = {
    'start': {
        'a': 2,
        'b': 2,
    },
    
    'a': {
        'end': 2,
        'c': 2,
    },
    
    'b': {
        'a': 2,
    },

    'c': {
        'end': 2,
        'b': -1,
    },
    
    'end': {},
}


const d_graph: GraphI = {

    'start': {
        'a': 6,
        'b': 2,
    },

    'a': {
        'end': 1,
        'c': 3,
    },

    'b': {
        'a': 3,
        'end': 5,
        'c': 5,
    },

    'c': {},

    'end': {},
};


const d = new Dijkstra(c_graph, 'start');

console.log(d.costs);
console.log(d.parents);

console.log(d.total_cost('end'));

//console.log(d.processed);
