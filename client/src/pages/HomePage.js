import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import Listings from "../components/Listings";
import PaginationComp from "../components/PaginationComp";
import { getListings, getListingsByQuery } from "../redux/listingsSlice";

import FilterForm from "../components/Forms/FilterForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const [showFilterForm, setShowFilterForm] = useState(false);
  const { listings, totalPages, status } = useSelector(
    (state) => state.listings
  );

  let [searchParams, setSearchParams] = useSearchParams();
  let currentParams = Object.fromEntries([...searchParams]);

  let location = useLocation();

  let { pathname } = useLocation();

  useEffect(() => {
    pathname === "/listings" &&
      dispatch(
        getListings({
          searchQuery: currentParams,
        })
      );
    pathname === "/listings/search" &&
      dispatch(getListingsByQuery({ searchQuery: currentParams }));
  }, [location]);

  return (
    <div>
      {status === "fulfilled" && (
        <>
          <Accordion className="mb-5">
            <Accordion.Item eventKey={showFilterForm ? "1" : "0"}>
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <FilterForm setShowFilterForm={setShowFilterForm} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Listings listings={listings} status={status} />
        </>
      )}

      {listings.length === 0 && status === "fulfilled" && (
        <div className="text-center">No listings were found.</div>
      )}

      {/* <PaginationComp totalPages={totalPages} /> */}
      {status === "fulfilled" && <PaginationComp totalPages={totalPages} />}
    </div>
  );
};

export default HomePage;
