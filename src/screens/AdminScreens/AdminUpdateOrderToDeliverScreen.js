import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodeliverOrderAction } from '../../redux/actions/orderActions';

const AdminUpdateOrderToDeliverScreen = ({ match, history }) => {
  console.log(match.params.id);
  const dispatch = useDispatch();

  const updateOrderToPaid = () => {
    dispatch(updateTodeliverOrderAction(match.params.id));
    history.push('/admin/allorders');
  };
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-500 -ml-9'>
      <h3 className='text-gray-200'>update to deliver {match.params.id}</h3>
      <div>
        <button
          className='bg-red-800 text-white text-xl py-2 px-3 rounded'
          onClick={updateOrderToPaid}>
          Update to deliver
        </button>
      </div>
    </div>
  );
};

export default AdminUpdateOrderToDeliverScreen;
