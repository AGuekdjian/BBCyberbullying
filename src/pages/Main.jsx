import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import users from '../service/users'
import { CiCirclePlus } from 'react-icons/ci'



const Main = () => {
    return (
        <main className='main'>
            <div className='social-container'>
                <ul className='main-menu'>
                    <li><a href='https://www.instagram.com/' target='_blank'><AiOutlineInstagram className='icon insta' /><br />Instagram</a></li>
                    <li><a href='https://twitter.com/?lang=es' target='_blank'><AiOutlineTwitter className='icon twitter' /><br />Twitter</a></li>
                    <li><a href='https://es-la.facebook.com/' target='_blank'><BsFacebook className='icon facebook' /><br />Facebook</a></li>
                    <li><a href='https://www.tiktok.com/es/' target='_blank'><FaTiktok className='icon tiktok' /><br />TikTok</a></li>
                    <li><CiCirclePlus className='icon-plus-social'/><br />Agregar</li>
                </ul>
                
            </div>

            <div className='main-content'>
                <div className='main-comments'>
                    <h2>Comentarios</h2>
                    {
                        users.map(({ id, perfil, nombre, time, text }) => {
                            return (
                                <div key={id} className="comments-container"><br />
                                    <div className='comment-content'>
                                        <div className='comment-user'>
                                            <img src={perfil} alt="Avatar" className="logo-comment" />
                                            <h4>{nombre}</h4>
                                        </div>
                                        <span className="time-comment">{time}</span>
                                    </div>
                                    <hr className="line-comment" />
                                    <p>{text}</p>
                                    <button type="button" className="btn-comment"><AiFillLike className='btn-icon' />Like</button>
                                    <button type="button" className="btn-comment"><FaComment className='btn-icon' />Comment</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='main-helpers'>
                    <div className='helpers-content'>
                    </div>
                    <div className='btn-container-helper'>
                        <div className='btn-content-psico'>
                            <h3>Solicitá ayuda psicológica</h3>
                            <button className='btn-psico ov-btn-slide-left-psico'>Solicitar</button>
                        </div>
                        <div className='btn-content-chat'>
                            <h3>Conéctate con otros usuarios que tubieron o pasan por situaciones de cyberbullying</h3>
                            <button className='btn-chat ov-btn-slide-left'>Chatear</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
