"use client"
import Loader from '../Loader/Loader';
import './Button.css';

const Button = (props) => {
    const {
        mode,
        id,
        onClick,
        disabled,
        type,
        children,
        loading
    } = props;
    const handleClick = (e) => {
        if (onClick) {
            onClick(id);
        }
    };
    return (
        <button
            id={id}
            type={type}
            className={`btn ${mode}`}
            disabled={loading ? true : disabled}
            onClick={(e) => handleClick(e)}
        >
            {loading ?
                <Loader />
                : children
            }
        </button >
    );
};

export default Button;