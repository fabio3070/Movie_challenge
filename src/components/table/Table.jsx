import {useReactTable , getCoreRowModel, flexRender} from '@tanstack/react-table';
import { useMemo } from 'react';
import { StyledTableTopRow, StyledTable, StyledTableData, StyledTableHeader, StyledTableRow } from './table.style';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Table({tableData, columns, callback}) {
    const data = useMemo(() => tableData, [tableData]);
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
    
    return(
        <div>
            {data && 
            <StyledTable>
                {table.getHeaderGroups().map(headerGroup => (
                    <StyledTableTopRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <StyledTableHeader key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </StyledTableHeader>
                        ))}
                    </StyledTableTopRow>
       
                ))}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <StyledTableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <StyledTableData key={cell.id} id={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </StyledTableData>
                            ))}
                            <StyledTableData key={row.id} id={row.original.id} onClick={() => callback(row.original.id)}>
                                <IconButton>
                                    <VisibilityIcon />
                                </IconButton>
                            </StyledTableData>
                        </StyledTableRow>
                    ))}
                </tbody>
            </StyledTable>}
        </div>
    );
}
