import React from 'react';

type PropsType = {
  onCancel: () => void,
  onConfirm: () => void
}

export default function ChoiceBox({onCancel, onConfirm}:PropsType) {
  return (
    <article className='Overlay'>
        <div className="ChoiceBox">
          <h2> Voulez-vous vraiment supprimer cette tâches ? </h2>

          <div className="ButtonCointaner">
              <button onClick={onCancel} className="btn-no">Non</button>
              <button onClick={onConfirm} className="btn-yes">Oui</button>
          </div>
        </div>
    </article>
  )
}
