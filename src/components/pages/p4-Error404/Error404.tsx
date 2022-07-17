import React from 'react'
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.error_wrapper}>
            <article className={s.header_error_wrapper}>
                <h1 className={s.header_error}>404</h1>
                <h2>Page not found!</h2>
            </article>
            <img className={s.error_img} src="https://css-tricks.com/wp-content/themes/CSS-Tricks-19/images/ripped.jpg" alt={'img'}/>
        </div>
    )
}

export default Error404
