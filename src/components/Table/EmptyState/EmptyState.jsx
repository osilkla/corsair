const EmptyState = () => {
  return (
    <tr>
      <td colSpan='5' className='px-4 py-10 text-center text-gray-400 italic'>
        Aucun événement ne correspond à vos filtres.
      </td>
    </tr>
  );
};
export default EmptyState;
