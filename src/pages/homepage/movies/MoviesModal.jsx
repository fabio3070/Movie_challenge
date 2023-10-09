import { useEffect, useState } from "react";
import { fetchMovieById } from "../../../api/movies.api";
import ModalContainer from "../../../components/modal/ModalContainer";
import { StyledModalListContainer, StyledModalTitle, StyledModalValueHalfWidth, StyledModalList, StyledModalDivisory, StyledModalLable, StyledModalValueText, StyledModalListItem } from "./moviesList.styles";

export default function MoviesModal({movieId}) {
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        if (movieId !== "" && movieId !== undefined) {
            const fetchData = async () => {
                try {
                    const data = await fetchMovieById(movieId);
                    setMovieData(data);
                } catch (error) {
                    console.error(`Error fetching movies: ${error.message}`);
                }
            };
            fetchData();
        }
    }, [movieId]);

    return (
        <>
        {movieData && 
            <ModalContainer width={748} openModal={movieData}>
                <StyledModalTitle>
                    {movieData.title}
                </StyledModalTitle>
                <StyledModalDivisory />
                <StyledModalListContainer>
                    <StyledModalList>
                    {Object.keys(movieData).map((key) => {
                        if(key === "director" || key === "actors"){
                            return(
                                <StyledModalValueHalfWidth key={key}>
                                    <StyledModalLable>{key}</StyledModalLable> 
                                    <StyledModalValueText color={"blue"}>{movieData[key]}</StyledModalValueText>
                                </StyledModalValueHalfWidth>
                            );
                        }
                        if(key !== "id"){
                            return(     
                            <StyledModalListItem key={key}>
                                <StyledModalLable>{key}</StyledModalLable> 
                                <StyledModalValueText >{movieData[key]}</StyledModalValueText>
                            </StyledModalListItem>
                            );
                        }
                    }
                    )}
                    </StyledModalList>
                </StyledModalListContainer>
            </ ModalContainer> }
        </>
    )
}
