import { SortableItem } from "../../interfaces/interfaces";
import {Box, TextField } from "@mui/material/";
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface Props {
  item: SortableItem;
  index: number,
}

export const ItemToSort = ({ item, index}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item?.id || "",
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      key={`${index}.${item.name}`}
    >
      <TextField
        type="text"
        name={`tech-${index}`}
        value={item.name}
        disabled
        variant="outlined"
        sx={{ width: "100%" }}
        size="small"
      />
    </Box>
  );
};
