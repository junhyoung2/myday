const Theme = ({ isDark, onThemeChange }) => {
    return (
        <button className="theme-button" onClick={onThemeChange}>
            {isDark ? 'LIGHT' : 'DARK'}
        </button>
    );
};

export default Theme;