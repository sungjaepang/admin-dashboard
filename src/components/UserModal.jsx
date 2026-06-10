/* 260606 front프로젝트 시작 */
/* 260609 파일 생성 */

/* 6단계 CRUD - 1. Edit -> 모달 */
/* 7단계 CRUD - 2. UserModal을 수정 폼(Update Form)으로 변경 */
/* 9단계 CRUD - 4. Create 기능 */
/*  */


import { useState } from "react";

function UserModal({ mode = "edit", selectedUser, onClose, onSave }) {
  const isEditMode = mode === "edit"; /* 9단계 */

  /* 7단계 */
  const [formData, setFormData] = useState({
    /* 9단계 */
    name: selectedUser?.name ?? "",
    email: selectedUser?.email ?? "",
    role: selectedUser?.role ?? "User",
    status: selectedUser?.status ?? "Active",
  });

  /* 7단계 + α(에러 때문에 useEffect 다시 제거) */
  // useEffect(() => {
  //     if (selectedUser) {
  //         // selectedUser 변경 시 폼 초기값 동기화
  //         setFormData({
  //             name: selectedUser.name,
  //             email: selectedUser.email,
  //             role: selectedUser.role,
  //             status: selectedUser.status,
  //         });
  //     }
  // }, [selectedUser]);

  // if (!isOpen) return null;
  /* 6단계 - Users.jsx에서 selectedUser 초기값이 :
    const [selectedUser, setSelectedUser] = useState(null); 
    이라서, 모달 안에서 selectedUser.name을 바로 읽으면 오류가 날 수 있음.
    그래서 아래 한 줄 수정
    */ 
  // if (!isOpen || !selectedUser) return null; /* 7단계 + α(에러 때문에 useEffect 다시 제거) */

  /* 7단계 */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* 7단계 */
  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...selectedUser,
      ...formData,
    });
  };

  return (
    <div className="modal-backdrop">
      {/* <div className="modal">
        <h3>User Detail</h3> */}
        {/* 7단계 */}
      <form className="modal" onSubmit={handleSubmit}>
            {/* 9단계 */}
        <h3>{isEditMode ? "Edit User" : "Add User"}</h3>

        {/* <div className="modal-content">
          <p> <strong>Name:</strong> {selectedUser.name} </p>
          <p> <strong>Email:</strong> {selectedUser.email} </p>
          <p> <strong>Role:</strong> {selectedUser.role} </p>
          <p> <strong>Status:</strong> {selectedUser.status} </p>
        </div> */}

        {/* 7단계 */}
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="modal-actions">
          {/* <button type="button" onClick={onClose}>Close</button> */}

            {/* 7단계 */}
          <button type="button" className="ghost-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-button">
            {/* 9단계 */}
            {isEditMode ? "Save" : "Add"}
          </button>
        </div>


      </form>
    </div>
  );
}

export default UserModal;