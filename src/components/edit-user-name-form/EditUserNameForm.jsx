import React, { useEffect, useState } from 'react';
import styles from './EditUserNameForm.module.scss';
import { useSelector } from 'react-redux';
import { tokenSelector, userSelector } from '../../store/selectors/selectors';
import { edit } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

/**
 * @name EditUserNameForm
 * @description This component will render the edit mode by click on edit button.
 * @returns {JSX.Element}
 */

const EditUserNameForm = () => {
    const user = useSelector(userSelector);
    const token = useSelector(tokenSelector);
    let dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
    }, [user]);

    const handleEdit = (event) => {
        event.preventDefault();
        setEditMode(false);
        dispatch(edit(firstName, lastName, token));
    };

    return (
        <>
            {editMode ? (
                <form
                    className={styles.edit_user_name_container}
                    onSubmit={handleEdit}
                >
                    <div className={styles.edit_user_name_input_container}>
                        <label htmlFor="firstname">
                            <input
                                minLength={2}
                                maxLength={15}
                                type="text"
                                name="firstname"
                                placeholder={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="lastname">
                            <input
                                minLength={2}
                                maxLength={15}
                                type="text"
                                name="lastname"
                                placeholder={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.edit_user_name_button_container}>
                        <button
                            className={styles.edit_user_name_button}
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className={styles.edit_user_name_button}
                            onClick={() => setEditMode(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className={styles.edit_user_name_button_container}>
                    <button
                        className={styles.edit_user_name_button}
                        onClick={() => setEditMode(true)}
                    >
                        Edit
                    </button>
                </div>
            )}
        </>
    );
};

export default EditUserNameForm;
