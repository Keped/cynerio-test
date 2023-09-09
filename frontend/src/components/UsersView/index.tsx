import { styled } from "styled-components";
import FilteredTable from "./FilteredTable";
import { BlueButton, FlexibleDiv } from "../shared";
import { useAppDispatch } from "../../hooks";
import { show } from "../../store/reducers/modal";
import { SearchKeys, User, setSearchTerm } from "../../store/reducers/users";
import { useState } from "react";

interface IUserViewProps {
    addButton?: boolean,
    searchBar?: boolean
};


const UsersView: React.FC<IUserViewProps> = ({ addButton, searchBar }) => {
    const [filteredCols, setFilteredCols] = useState<Record<SearchKeys, boolean>>({ name: true, address: true, date: true });
    const toggleFilter = (keyName: SearchKeys) => {
        const updated =  {...filteredCols};
        updated[keyName] = !filteredCols[keyName];
        setFilteredCols(updated);
    }

    const filters = (['name', 'address', 'date'] as SearchKeys[]).map(key => (
        <FlexibleDiv>
            <input type="checkbox" onClick={() => { toggleFilter(key) }} />
            <label>{key}</label>
        </FlexibleDiv>
    ))
    const dispatch = useAppDispatch();
    return (
        <UsersDiv>
            <ActionsRow>
                <CheckboxRow>
                    {filters}                   
                </CheckboxRow>
                {
                    (addButton || searchBar) &&
                    <SearchAndAdd>
                        {searchBar && <input type="text" placeholder="Search table" onChange={(e) => dispatch(setSearchTerm(e.target.value))} />}
                        {addButton && <BlueButton onClick={() => { dispatch(show()) }}>Add User</BlueButton>}
                    </SearchAndAdd>
                }
            </ActionsRow>
            <FilteredTable showCols={filteredCols}/>
        </UsersDiv>);
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