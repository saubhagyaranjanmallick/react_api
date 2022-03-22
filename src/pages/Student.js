import React, { useState } from "react";

const Student = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisations,setOrganisations]=useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password ,organisations:organisations};

    setAllEntry([...allEntry, newEntry]);
    console.log(newEntry);
  };


        return (
          <>
    <form action="" onSubmit={submitform}>
      
      <div class="container-fluid bg-secondary  ">
        <div class="row mt-md-3">
          <div class="col-10 col-md-6 mt-3 p-5">
            <div class="card ">
              <div class="card-body content-justify-center">
                <h2 class="text-center">Student Login Credential</h2>
                <div class="mb-3">
                  <label For="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label For="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label For="organisations">Organisations</label>
                  <input
                    type="text"
                    class="form-control"
                    name="organisations"
                    id="organisations"
                    value={organisations}
                    onChange={(e) => setOrganisations(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </form>
    
  </>
        );
    }
export default Student;
