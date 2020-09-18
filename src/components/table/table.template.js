const CODES = {
    A: 65,
    Z: 90
}

function createCell(){
    return `
        <div class="cell" contenteditable ></div>
    `
}

function createCol(col){
    return `
    
    <div class="column">${col}</div>
    
    `
}

function createRow(content, num) {
    return `
    <div class="row">
        <div class="row-info">${num}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

export function createTable(rowsCount = 30){
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map((el, index) => {
            return String.fromCharCode(CODES.A + index)
        })
        .map(el => {
            return createCol(el)
        })
        .join('')

    rows.push(createRow(cols, ''))

    for (let i = 0; i < rowsCount; i++){
        const cells = new Array(colsCount)
        .fill('')
        .map(el => {
            return createCell()
        })
        .join('')
        rows.push(createRow(cells, i + 1))
    }
    return rows.join('')
}