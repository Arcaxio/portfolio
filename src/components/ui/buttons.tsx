'use client'
import { deleteCard } from "@/app/projects/serverFetch";

export function DeleteButton({ id }: { id: string }) {
  const deleteCardAction = deleteCard.bind(null, id)

  return (
    <div>
      <button className="btn btn-primary" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>Delete</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Confirmation</h3>
          <p className="py-4">Are you sure you want to delete this card?</p>
          <div className="modal-action">
            <form action={deleteCardAction}>
              <button className="btn btn-secondary w-20">Yes</button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-20 ms-4">No</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
