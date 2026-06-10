/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 8단계 CRUD - 3. Delete */
/*  */
/*  */


function DeleteConfirmModal({ selectedUser, onClose, onConfirm }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Delete User</h3>

        <p className="delete-message">
          <strong>{selectedUser.name}</strong> 사용자를 삭제하시겠습니까?
        </p>

        <p className="delete-subtext">
          삭제한 사용자는 목록에서 제거됩니다.
        </p>

        <div className="modal-actions">
          <button type="button" className="ghost-button" onClick={onClose}>
            Cancel
          </button>

          <button type="button" className="danger-button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;