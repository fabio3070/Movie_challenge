import React, {useState} from 'react';
import Table from '../../../components/table/Table';
import MoviesModal from './MoviesModal';

export default function MoviesList({moviesData}) {
    const [movieId, setMovieId] = useState();
    
    /** @type import('@tanstack/react-table').ColumnDef<any> */
    const columns = [
        {
            header:'Ranking',
            accessorKey: 'rank',
            footer: 'rank',
            id: 'rank'
        },
        {
            header:'Title',
            accessorKey: 'title',
            footer: 'title',
            id: 'footer'
        },
        {
            header:'Year',
            accessorKey: 'year',
            footer: 'year',
            id: 'year'
        },
        {
            header:'Revenue',
            accessorKey: 'revenue',
            footer: 'revenue',
            id: 'revenue'
        },
    ];
    
    return (
        <section>
            {moviesData &&
                <>
                    <Table tableData={moviesData} columns={columns} callback={setMovieId}/>
                    <MoviesModal movieId={movieId}/>
                </>
            }
        </section>
    )
}
