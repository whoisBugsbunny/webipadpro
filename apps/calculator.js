
const calculator = `<div><style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
}

.table {
    border: 2px solid black;
    width: 100%;
    height: 100%;
}

.table>tbody>tr>td>div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #ccc;
    border-radius: 5px;
    height: 100%;
    width: 100%;
}
</style>

<table class="table">
        <tbody>
            <tr>
                <td colspan="4">
                    <div>
                        <input type="text">
                    </div>
                </td>
                <td rowspan="7">
                    <div>history</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>%</div>
                </td>
                <td>
                    <div>CE</div>
                </td>
                <td>
                    <div>C</div>
                </td>
                <td>
                    <div><i class='fas fa-backspace'></i></div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>1/x</div>
                </td>
                <td>
                    <div>x<sup>2</sup></div>
                </td>
                <td>
                    <div><sup>2</sup>√x</div>
                </td>
                <td>
                    <div>÷</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>7</div>
                </td>
                <td>
                    <div>8</div>
                </td>
                <td>
                    <div>9</div>
                </td>
                <td>
                    <div>&#215;</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>4</div>
                </td>
                <td>
                    <div>5</div>
                </td>
                <td>
                    <div>6</div>
                </td>
                <td>
                    <div>-</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>1</div>
                </td>
                <td>
                    <div>2</div>
                </td>
                <td>
                    <div>3</div>
                </td>
                <td>
                    <div>+</div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div>0</div>
                </td>
                <td>
                    <div>.</div>
                </td>
                <td>
                    <div>=</div>
                </td>
            </tr>
        </tbody>
    </table>

</div>`;

export default calculator;