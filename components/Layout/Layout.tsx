import Link from "next/link"

import React, { useRef, useState } from "react"

import Router, { withRouter, NextRouter } from "next/router"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import GithubIcon from "../svgIcons/Github"
import { IconButton } from "@material-ui/core"
import { Search } from "@material-ui/icons"

interface LayoutProps {
  router: NextRouter
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const router = useRouter()

  const [searchInput, setSearchInput] = useState<string>("")

  const input = useRef<any>("")

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const q = input.current.value
    console.log(q)
    Router.push(`/search?q=${q}`)
  }

  return (
    <div>
      <AppBar elevation={0} className="appBar" position="static">
        <Toolbar className="toolbar">
          <div className="toolbarContent centered">
            <Link href="/">
              <GithubIcon className="logo" />
            </Link>
            <div className="grow" />
            <form onSubmit={onSubmitSearch}>
              {/* <InputSearch
                fullWidth={false}
                placeholder="Search for repo"
                inputProps={{
                  ref: input,
                  className: "searchInput",
                }}
              /> */}
              <input
                placeholder="Search for repo"
                ref={input}
                className="searchInput"
                onChange={onChangeInput}
                value={searchInput}
              />
              <IconButton tabIndex={-1} type="submit" className="searchIcon">
                <Search />
              </IconButton>
            </form>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}

export default Layout
