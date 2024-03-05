import React from 'react';
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle, MdLanguage } from 'react-icons/md';
import logo from '../assets/airbnb.svg'; //importação do logo da navbar.
import './css/navbar.css'; //importação css.

export default function Navbar() {
    return (
        <div>
            <nav className='nav-topo'>
                <div className='conteiner-airbnb'>
                    <div className='d-flex align-items-center col-sm-6'>
                        <img className='logo' src={logo} alt='Logo do Site'></img>
                    </div>
                    <div className='d-flex align items-center justify-content-end col-sm-6'>
                        <a href='#' className='link-especial'>Seja um anfitrião</a>
                        <a href='#' className='icon-nav mx-2'><MdLanguage /></a>
                        <div className="dropdown">
                            <button className="button-login dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div style={{ fontSize: '20px' }}>
                                    <IoMenu />
                                    <MdAccountCircle />
                                </div>
                    
                            </button>
                            <ul style={{borderRadius:'15px'}} className="dropdown-menu mt-2 py-3 border-0 shadow">
                                <li><a className="fw-bold dropdown-item p-2 px-3" href="#">Cadastre-se</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
                                <li><hr className='dropdpwn-divider'></hr></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
