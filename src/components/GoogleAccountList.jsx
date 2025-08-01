function GoogleAccountList({ id, email }) {
  return (
    <div className="account">
      <div className="profie-img"></div>
      <div className="account-text-box">
        <p className="account-id">{id}</p>
        <p className="account-email">{email}</p>
      </div>
    </div>
  );
}

export default GoogleAccountList;
