import Image from 'next/image'
import React from 'react'
import './avatar.scss'

const Avatar = () => {
    const user = {
        avatar: '/images/profile.jpg',
        name: 'Pepito',
        email: 'pepito@gmail.com'
    }
    return (
        <section className='container-avatar'>
            <div className='container-avatar__avatar'>
                {user.avatar ?
                    <Image src={user.avatar} fill alt='Profile image'/>
                :
                    <p>
                        {user.name[0].toUpperCase()}
                    </p>
                }
            </div>
            <div className='container-avatar__details'>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </section>
    )
}

export default Avatar