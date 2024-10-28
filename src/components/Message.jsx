import React from 'react';
import Messages from './Messages';

function Message() {
  const Styles = {
    // maxHeight: 'calc(100% - 100px)',
    // minHeight: 'calc(100% - 100px)',
    // height: '80%'
  };
  return (
    <div className='message overflow-y-scroll bg-gray-200'>
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </div>
  );
}

export default Message;
