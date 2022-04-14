import React from 'react';
import styles from './EditProfileForm.module.scss';

const EditProfileForm = () => {
    return (
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
                    <input type="text" name="lastname" placeholder={'azeaze'} />
                </label>
            </div>
        </form>
    );
};

export default EditProfileForm;
