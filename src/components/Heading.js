import React, { useEffect, useState } from "react";
import { PROFILE_LOGO_URL, VOICE_LOGO_URL } from "../util/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addsidemenu } from "../util/appSlice";
import { useNavigate } from "react-router-dom";
import { addSearch } from "../util/SearchSlice";
import Suggestionlist from "./Suggestionlist";

function Heading() {
  const dispatch = useDispatch();
  const searchhash = useSelector((store) => store.search);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const handlesidemenu = () => {
    dispatch(addsidemenu());
  };
  const navigate = useNavigate();
  const handlelogoclick = () => {
    navigate("/");
  };
  const [searchtext, setsearch] = useState("");
  const [recommendarr, setrecommendarr] = useState([]);
  const handlesearchchange = (e) => {
    setsearch(e.target.value);
  };
  const getRecommandations = async () => {
    const raw = await fetch(
      `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=${searchtext}&xhr=t&xssi=t&gl=in`
    );
    const str = await raw.text();
    const filteredstr = str.trim().substring(5);
    const data = JSON.parse(filteredstr);
    const recommended = data[1].map((d) => d[0]);
    dispatch(addSearch({ [searchtext]: recommended }));
    setrecommendarr(recommended);
  };
  useEffect(() => {
    if (searchhash[searchtext]) {
      setrecommendarr(searchhash[searchtext]);
    }
    else
    {
      const timeid = setTimeout(() => {
         getRecommandations(); 
      }, 300);
      return () => {
        clearTimeout(timeid);
      };
    }
  }, [searchtext]);
  return (
    <div className="w-full h-14 relative z-10">
      <div className="flex w-full justify-between h-14 fixed bg-white">
        <div className="flex">
          <button onClick={handlesidemenu}>
            <svg
              className="ml-2 -mt-2"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              height="40px"
              width="35px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <img
            src="https://th.bing.com/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="w-26 h-14 -mt-1 ml-2"
            alt="logo"
            onClick={handlelogoclick}
          />
        </div>
        <div className="flex h-10 w-1/2">
          <div className="pl-3 rounded-2xl border-black flex justify-between w-11/12 mt-2 h-10">
            <input
              onChange={handlesearchchange}
              onFocus={() => setshowsuggestions(true)}
              onBlur={() => setshowsuggestions(false)}
              type="text"
              placeholder=" Search"
              className="w-full border-2 rounded-l-3xl  pl-4 "
            />
            {showsuggestions && <Suggestionlist data={recommendarr} />}
            <button className="w-[12%] border-2 flex justify-center pt-1 rounded-r-3xl bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
          </div>
          <div className=" rounded-full w-10 h-10 mt-2 ml-5">
            <button>
              <img
                className="w-10 h-10"
                src={VOICE_LOGO_URL}
                alt="voice search"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-evenly w-[14%] items-center">
          <svg
            className="w-7 h-6"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 329.79"
            height="30px"
            width="30px"
          >
            <path
              fill-rule="nonzero"
              d="M63.64 0h256.87c17.41 0 33.28 7.24 44.81 18.77 11.59 11.6 18.82 27.62 18.82 45v2.94L493.42 18.3c6.69-2.94 14.5.1 17.44 6.78.76 1.73 1.13 3.55 1.13 5.33l.01 268.98c0 7.31-5.94 13.25-13.25 13.25-2.28 0-4.42-.58-6.3-1.6l-108.31-50.06v5.05c0 17.33-7.28 33.29-18.88 44.9l-.08.08c-11.55 11.52-27.46 18.78-44.67 18.78H63.64c-17.28 0-33.21-7.19-44.8-18.76C7.23 299.4 0 283.49 0 266.03V63.77c0-17.54 7.18-33.49 18.73-45.05C30.28 7.18 46.18 0 63.64 0zm204.47 151.15v27.5c0 1.7-1.4 3.1-3.09 3.1h-56.11v56.1c0 1.7-1.39 3.09-3.09 3.09h-27.51c-1.7 0-3.09-1.38-3.09-3.09v-56.1h-56.1c-1.7 0-3.1-1.39-3.1-3.1v-27.5c0-1.71 1.38-3.1 3.1-3.1h56.1v-56.1c0-1.71 1.38-3.1 3.09-3.1h27.51a3.1 3.1 0 0 1 3.09 3.1v56.1h56.11c1.71 0 3.09 1.41 3.09 3.1zm116.96-55.92v137.06l100.44 46.42V50.75L385.07 95.23zm-64.56-68.74H63.64a37.36 37.36 0 0 0-26.47 10.96c-6.75 6.75-10.95 16.08-10.95 26.32v202.26c0 10.18 4.22 19.45 10.95 26.16 6.86 6.87 16.28 11.11 26.47 11.11h256.87c10.14 0 19.51-4.29 26.32-11.11 6.83-6.82 11.09-16.11 11.09-26.16V63.77c0-10.11-4.24-19.46-11.04-26.27-6.76-6.75-16.11-11.01-26.37-11.01z"
            />
          </svg>
          <svg
            className="w-7 h-7"
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 0 611.999 611.999"
            spacing={"preserve"}
          >
            <g>
              <g>
                <g>
                  <path
                    d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
				C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
				c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
				h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
				c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
				C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
				c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
				c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
				 M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
				c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
				c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"
                  />
                  <path
                    d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
				c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
				C323.259,126.96,315.532,119.235,306.001,119.235z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <img className="w-11 h-11" src={PROFILE_LOGO_URL} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Heading;
