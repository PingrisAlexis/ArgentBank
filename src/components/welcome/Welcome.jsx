import React from 'react'
import styles from './Welcome.module.scss'

const Welcome = () => {
    return (
        <section>
            <h2>Welcome Back</h2>
            <form>
                <div className="preference">
                    <label htmlFor="firstname">
                        <input
                            type="text"
                            name="firstname"
                            placeholder={'azeaze'}
                        />
                    </label>
                </div>
                <div className="preference">
                    <label htmlFor="lastname">
                        <input
                            type="text"
                            name="lastname"
                            placeholder={'azeaze'}
                        />
                    </label>
                </div>
            </form>
        </section>
    )
}

export default Welcome
