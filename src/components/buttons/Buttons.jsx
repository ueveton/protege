import React from 'react'

export const Buttons = () => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-warning">Limpar</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Salvar</button>
        </div>
    )
}
