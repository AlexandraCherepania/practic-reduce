import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../../reduce/constants";
import { getStatusFilter } from "../../../reduce/selectors";
import { setStatusFilter } from "../../../reduce/actions";
 
import css from '../StatusFilter/StatusFilter.module.css'
import { Button } from "../Button/Button";


export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
