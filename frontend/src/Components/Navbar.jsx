import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <Desktop>
                <Logo src="https://download.logo.wine/logo/Dell_Technologies/Dell_Technologies-Logo.wine.png" alt="logo" />
                <SearchBox>
                    <Input type="text" placeholder="search here" />
                    <CgSearch style={{
                        fontSize: '20px',
                        padding: '0px 10px'
                    }} />
                </SearchBox>
                <User>
                    <ImUser style={{
                        fontSize: '20px',
                    }} />
                    <Select>
                        <option value="">Sign In</option>
                        <option value="">Logout</option>
                    </Select>
                </User>
                <Language>
                    <MdLanguage style={{
                        fontSize: '20px'
                    }} />
                    <Select>
                        <option value="">Language</option>
                    </Select>
                </Language>
            </Desktop>

            <Mobile>
                <MenuBar>
                    <Logo src="https://download.logo.wine/logo/Dell_Technologies/Dell_Technologies-Logo.wine.png" alt="logo" />
                    <User>
                        <ImUser style={{
                            fontSize: '20px',
                        }} />
                        <Select>
                            <option value="" onClick={handleRegister}>Sign In</option>
                            <option value="">Logout</option>
                        </Select>
                    </User>
                    <Language>
                        <MdLanguage style={{
                            fontSize: '20px'
                        }} />
                        <Select>
                            <option value="">Language</option>
                        </Select>
                    </Language>
                </MenuBar>
                <SearchBox>
                    <Input type="text" placeholder="search here" />
                    <CgSearch style={{
                        fontSize: '20px',
                        padding: '0px 10px'
                    }} />
                </SearchBox>
            </Mobile>
        </div>
    )
}

export default Navbar;


const Desktop = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 0rem 1fr 3fr 1fr 1fr 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: sticky;
  top: 0;

  @media (max-width: 850px) {
    display: none;
  }
`

const Logo = styled.img`
  display: block;
  width: 200px;
  height: 5rem;
  grid-column: 2/3;
  display: flex;
  justify-content: start;
  align-items: center;
`

const SearchBox = styled.div`
  width: 80%;
  height: 2rem;
  border: 1px solid;
  border-radius: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3/4;

  @media (max-width: 850px) {
    width: 90%;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
`

const User = styled.div`
  border: 1px solid;
  width: 120px;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4/5;
  border-radius: 2px;

  @media (max-width: 850px) {
    grid-column: 3/4;
  }

  @media (max-width: 469px) {
    width: 60px;
    border: none;
  }
`

const Select = styled.select`
  border: none;
  outline: none;
  display: flex;
  font-size: 16px;
`

const Language = styled.div`
  width: 120px;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  grid-column: 5/6;
  border-radius: 2px;

  @media (max-width: 850px) {
    grid-column: 4/5;
  }

  @media (max-width: 469px) {
    width: 60px;
    border: none;
  }
`







const Mobile = styled.div`
  display: none;
  height: 8rem;

  @media (max-width: 850px) {
    display: block;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: sticky;
    top: 0;
  }
`

const MenuBar = styled.div`
  display: grid;
  grid-template-columns: 0fr repeat(3, 1fr) 1rem;
`
