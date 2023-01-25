export interface GraphI {
    [node: string]: {
        [node: string]: number
    }
};

export class Dijkstra<

TGraph extends GraphI,

TNode extends Extract<keyof TGraph, string>

>{
    readonly graph: TGraph;
    readonly start_node: TNode;
    
    readonly costs: {[key: string]: number};
    readonly parents: {[key: string]: string | null};
    
    readonly processed: string[];
    
    constructor(graph: TGraph, startNode: TNode) {
        this.graph = graph;
        this.start_node = startNode;
        
        this.processed = [];
        
        this.costs = {};
        this.init_costs_obj();
        this.parents = {};
        this.init_parents_obj();
        
        let node = this.find_lowest_cost_node();

        while( node ) {
            let node_neighbors = this.graph[node];
            console.log(node)
            if( Object.keys(node_neighbors).length === 0 ) {
                this.processed.push(node);
                node = this.find_lowest_cost_node();
                continue;
            }

            for( let neighbor_node in node_neighbors ) {
                
                let cost = node_neighbors[neighbor_node];

                if( cost < this.costs[neighbor_node] ) {
                    this.costs[neighbor_node] = cost;
                    this.parents[neighbor_node] = node;
                }
            }

            this.processed.push(node);
            node = this.find_lowest_cost_node();
        }
    }

    private init_costs_obj() {
        this.costs[this.start_node] = Number.NEGATIVE_INFINITY;

        for( let node in this.graph ) {
            if( node !== this.start_node ) {
                this.costs[node] = Infinity;
            }
        }
    }

    private init_parents_obj() {
        this.parents[this.start_node] = this.start_node;

        for( let node in this.graph) {
            if( node !== this.start_node ) {
                this.parents[node] = null;
            }
        }
    }

    private find_lowest_cost_node(): string | null {
        let lowest_cost = Infinity;
        let lowest_cost_node: string | null = null;

        for( let node in this.costs ) {
            if( !(this.processed.find((item) => node === item)) ) {

                let node_cost = this.costs[node]

                if( node_cost < lowest_cost ) {
                    lowest_cost = node_cost;
                    lowest_cost_node = node;
                }
            }
        }

        return lowest_cost_node;
    }

    total_cost(end_node: string): number {
        let cost = this.costs[end_node];
        let parent: string | null = this.parents[end_node];
        
        while( parent !== 'start' ) {
            if( parent !== null  ) {
                console.log(parent)
                cost += this.costs[parent];
                parent = this.parents[parent];
            }
        }

        return cost;
    };
}





