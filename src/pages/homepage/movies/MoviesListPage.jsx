import React, { useEffect, useMemo, useRef, useState } from 'react';
import MoviesList from './MoviesList';
import MoviesListHeader from '../header/MoviesListHeader';
import SkeletonLoader from '../../../components/loader/SkeletonLoader';
import { StyledMain } from './moviesList.styles';
import { useFetch } from '../../../hooks/useFetch';
import debounce from 'lodash/debounce';
import { StyledErrorText } from '../../../styles/global.styles';

export default function MoviesListPage() {
    const [filters , setFilters] = useState({ page: 0, size: 30, start: null, end: null, rank: null });
    const {data, loading, error} = useFetch(filters);

    //Memoizes fetched data from useFetch
    const tableData = useMemo(() => {
        if(data.length > 0) return data;

        return [];
    }, [data]);

    //Create a ref to store the debounced scroll handler
    const debouncedHandleScrollRef = useRef(
        debounce(() => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                setFilters((prevState) => ({ ...prevState, page: prevState.page + 1 }));
            }
        }, 1000)
    );

    //Attach the scroll event listener only once when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScrollRef.current);
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', debouncedHandleScrollRef.current);
        };
    }, []);
    
    return (
        <StyledMain>
            {tableData && 
            <>
                <MoviesListHeader setFilters={setFilters}/>
                {loading ? <SkeletonLoader count={10}/> 
                : error ? <StyledErrorText>No data available, Please try again later.</StyledErrorText> 
                : <MoviesList moviesData={tableData} />}
            </>
            }
        </StyledMain>
    )
}
