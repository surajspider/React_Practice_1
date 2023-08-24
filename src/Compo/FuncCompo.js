// function FuncCompo() {
//     return (
//         <div>
//             <h1>This is Function Component</h1>
//         </div>
//     )
// }
// export default FuncCompo;

// function FuncCompoone() {
//     return (
//         <div>
//             <h2 style={{ color: "blue", display: "inline-block", border: "5px solid black" }}>This is Second Function</h2>
//         </div>
//     )
// }

// function FuncCompotwo() {
//     return (
//         <div>
//             <h3 style={{ backgroundColor: "lightgreen", display: "inline-block" }}>This is Third Function</h3>
//         </div>
//     )
// }

// function FuncCompothree() {
//     return (
//         <div>
//             <h4>This is Fourth Function!!</h4>
//         </div>
//     )
// }

// export { FuncCompoone, FuncCompotwo, FuncCompothree };

function FuncCompo(props) {
    return (
        // <div id="border">
        //     <h1>This is created using Functional Component</h1>
        //     <h3>This is done using External CSS</h3>
        //     <h3 style={{ color: "blue" }}>This is done using Inline CSS</h3>
        // </div>
        <div>
            <h1>Welcome to {props.data}</h1>
            <h2>My age is {props.age}</h2>
            <h2>My name is {props.data2.name}</h2>
            <h3>Printing a state variable using props:{props.data3.data}</h3>
            {console.log(props.data)};

        </div>
    )
}
export default FuncCompo;