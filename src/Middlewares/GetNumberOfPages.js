export default function GetNumberOfPages(pageNumber, data, rowsPerPage) {
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = data.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(data.length / rowsPerPage);
    return { rowData, NumberOfPages }
}