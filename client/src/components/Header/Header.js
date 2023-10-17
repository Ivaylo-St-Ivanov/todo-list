import { HeaderElement } from './styled';

const Header = () => {
    return (
        <HeaderElement>
            <h3>
                <i className="fas fa-clipboard-list" />
                &nbsp; Todo list
            </h3>
        </HeaderElement>
    );
};

export default Header;