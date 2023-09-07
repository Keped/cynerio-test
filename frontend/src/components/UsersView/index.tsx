import { styled } from "styled-components";
import FilteredTable from "./FilteredTable";
import { BlueButton, FlexibleDiv } from "../shared";

interface IUserViewProps {
    addButton?: boolean,
    searchBar?: boolean
};

const UsersView: React.FC<IUserViewProps> = ({ addButton, searchBar }) => {

    return (
        <UsersDiv>
            <ActionsRow>
                <CheckboxRow>
                    <FlexibleDiv>
                        <input type="checkbox" id="Date" />
                        <label>Date</label>
                    </FlexibleDiv>
                    <FlexibleDiv>
                        <input type="checkbox" value="Name" />
                        <label>Name</label>
                    </FlexibleDiv>
                    <FlexibleDiv>
                        <input type="checkbox" value="Address" />
                        <label>Address</label>
                    </FlexibleDiv>
                </CheckboxRow>
                {
                    (addButton || searchBar) &&
                    <SearchAndAdd>
                        {searchBar && <input type="text" placeholder="Search table" />}
                        {addButton && <BlueButton>Add User</BlueButton>}
                    </SearchAndAdd>
                }
            </ActionsRow>
            <FilteredTable />
        </UsersDiv>)
};

export default UsersView;

const UsersDiv = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
`;

const ActionsRow = styled(FlexibleDiv)`
    flex-direction: row;
    justify-content: space-between;
`;

const SearchAndAdd = styled(FlexibleDiv)`
    flex: 2;
    & ${BlueButton} {
        margin-left: 7px;
    }
`

const CheckboxRow = styled(FlexibleDiv)`
    flex: 8;
    
    & ${FlexibleDiv} {
        align-items: center;

        & label {
            margin-left: 2px;
        }
    }
`  