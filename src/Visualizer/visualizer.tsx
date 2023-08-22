import React from 'react';
import './visualizer.css'
import * as sorts from '../Sorting/sorting'

export default class Visualizer extends React.Component <{}, { array: number[] }>{
    static resetArray: any;
    
    constructor(props: any) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i=0; i<100; i++) {
            array.push(randomIntFromInterval(5,400));
        }
        this.setState({array});
    }

    mergeSort() {
        const array = sorts.mergeSort(this.state.array.slice());
        this.setState({array});  
    }

    quickSort() {
        const array = sorts.quickSort(this.state.array.slice(),0,this.state.array.length-1);
        this.setState({array});  

    }

    heapSort() {}

    bubbleSort() {
        const array = sorts.bubbleSort(this.state.array.slice());
        this.setState({array}); 
    }

    render() {
        const {array} = this.state;

        return (
            <>  

            <div id="top">
                    <h1> Sorting Visualizer</h1>
                    <div id="navbar"> 
                        <div>
                            <button onClick={() => this.resetArray()}><b>Reset Array</b></button>
                        </div>
                        <div>
                            <button onClick={() => this.mergeSort()}><b>Merge Sort</b></button>
                        </div>
                        <div>
                            <button onClick={() => this.quickSort()}><b>Quick Sort</b></button>
                        </div>
                        <div>
                            <button onClick={() => this.heapSort()}><b>Heap Sort</b></button>
                        </div>
                        <div>
                            <button onClick={() => this.bubbleSort()}><b>Bubble Sort</b></button>
                        </div>
                    </div>
                </div>

                <div className='container'>
                {array.map((value: number, index: number) => (
                    <div className='array-bar' key={index} style={{height: `${value}px`}}></div>
                ))}

                </div>

            </>
        );  
    }

}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max-min+1) + min )
}