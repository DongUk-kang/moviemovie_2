import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loading from "../../Components/Loading";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`

const MoviePresenter = ({nowPlaying, toprated, popular, upcoming, loading}) => {
    return (
        loading ? (
            <Loading />
        ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title={"Now Playing"}>
                        {nowPlaying.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                year={item.release_date}
                                poster={item.poster_path}
                            />
                            ))}
                    </Section>
                )}
                {toprated && toprated.length > 0 && (
                    <Section title={"Top Rated"}>
                        {toprated.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                year={item.release_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"PoPular"}>
                        {popular.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                year={item.release_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title={"Up Coming"}>
                        {upcoming.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                year={item.release_date}
                                poster={item.poster_path}
                            />
                        ))}
                    </Section>
                )}
            </Container>
            )

    );
};

MoviePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array
};

export default MoviePresenter;
