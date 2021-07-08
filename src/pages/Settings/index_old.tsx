import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './index.css';
import Modal from '../../components/Modal';
import { showModal } from '../../store/actions';

const mapDispatchToProps = {
  dispatchShowModal: showModal,
};

const connector = connect(undefined, mapDispatchToProps);

type AppProps = {} & ConnectedProps<typeof connector>;

function Settings(props: AppProps) {
  const { dispatchShowModal } = props;

  return (
    <>
      <Modal />
      <div className="App">
        <header className="App-header">
          <button
            onClick={() => {
              dispatchShowModal({
                title: 'A new title.',
                content: 'And a new description too.',
                onButtonClick: (event: React.MouseEvent) => {
                  alert('You clicked that button!');
                },
              });
            }}
          >
            Show Modal
          </button>
        </header>
      </div>
    </>
  );
}

export default connector(Settings);