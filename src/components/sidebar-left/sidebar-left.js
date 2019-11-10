/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Playlist from '../listPlaylist/listplaylist';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Launch from '../../common/modal/modal';
const QUERY_PLAYLISTS = gql`
	query GET_PLAYLISTS{
		getPlaylists{
            _id,
            title,
            owner_user{
            _id
            }
        }
	}
`;
let showModal = {};
const loginModalRef = ({handleShow}) => {
    showModal = handleShow;  
}
function SidebarL(props) {
   //QUERY
   const { loading, errors, data  } = useQuery(QUERY_PLAYLISTS);
   if (errors) return <h2>{`Errores: ${errors}`}</h2>	
   //QUERY
  return (
    <div className="content__left">
        <section className="navigation">
            <div className="navigation__list">
                <div className="navigation__list__header" role="button" data-toggle="collapse" href="#playlists" aria-expanded="true" aria-controls="playlists">
                    Playlists
                </div>
                <div className=" in" id="playlists">
                <Playlist title="Nuevo playlist"/>
                {
                        loading ? <h2>Cargando...</h2> 
                        : data.getPlaylists.map( playlist => (
                            <Playlist 
                                title={playlist.title} 
                            />
                        ))
                    }
                </div>
            </div>
        </section>
        <Launch ref={loginModalRef}/>
        <section className="playlist" onClick={() => showModal()}>
            <a href="#" >
                <i className="ion-ios-plus-outline"></i>New Playlist
            </a>
        </section>
    </div>
  );
}


export default SidebarL;


