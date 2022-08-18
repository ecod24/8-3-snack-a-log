import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <>
      <p>{snack.name}</p>
    </>
    // <TableRow>
    //   <TableCell >
    //     <Link to={`/songs/${song.id}/edit`}><EditIcon /></Link>
    //   </TableCell>
    //   <TableCell>
    //     {song.is_favorite ? (
    //       <span><StarIcon /></span>
    //     ) : (
    //       <span>&nbsp; &nbsp; &nbsp;</span>
    //     )}
    //   </TableCell>
    //   <TableCell>
    //     <Link to={`/songs/${song.id}`}>{song.name}</Link>
    //   </TableCell>
    //   <TableCell>{song.artist}</TableCell>
    //   <TableCell>
    //     {song.time}
    //   </TableCell>
    // </TableRow>
  );
}