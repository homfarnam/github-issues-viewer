import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  ListItem,
  ListItemText,
} from "@material-ui/core"

interface IssueProps {
  title: string
  bodyHTML: any
  author: { login: String; avatarUrl: String } | undefined
}

const Issue: React.FC<IssueProps> = ({
  title,
  bodyHTML,
  author: { login, avatarUrl },
}) => {
  const [dialogOpened, setDialogOpened] = useState(false)
  return (
    <>
      <ListItem button onClick={() => setDialogOpened(true)}>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Dialog
        maxWidth={"xl"}
        open={dialogOpened}
        onClose={() => setDialogOpened(false)}
      >
        <DialogContent>
          <div className="flex flex-row justify-start items-center">
            <img
              src={avatarUrl}
              alt="pic"
              className="w-10 h-10 justify-center items-center mt-1"
            />
            <h3 className="font-sans text-xl mb-5 pt-6 ml-5">
              Author: {login}
            </h3>
          </div>

          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Issue
