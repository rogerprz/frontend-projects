import React, {useEffect, useState} from 'react';
import { useApi } from '../context/ApiProvider';
import "./commits.css"
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
export const CommitGraph = () => {
    const { commits, status, error, refetch } = useApi();
    const [convertCommits, setConvertCommits] = useState([])
   

    useEffect(() => {
        const parsedCommits = parseCommits(commits)
      setConvertCommits(parsedCommits)
    }, [commits])
   
    if (status === "loading" && commits.length === 0) {
        return <div>Loading commits...</div>;
    }
    return (
       <div className="commits-graph-container">
        <div className="days-container">
            {daysOfWeek.map((day, index)=> {
            return <div key={index}>{day}</div>
        })}
        </div>
        <div className={"months-commits-container"}>
            <div className={"months-container"}>{months.map((month, index) => {
                return (<div key={index}>{month}</div>)
            })}
            </div> 
            <CommitsTable commits={convertCommits} />
       </div>
    </div>
    )
}

function CommitsTable({commits}) {
    return commits.length > 0 && <div className="commits-container">{commits.map((colCommits, key) => {
        return (
            <div key={key}className="commits-col-container">{colCommits.map((commit, key) => {
            return <CommitBlock key={key} commit={commit} />
        })}</div>)
   })}</div>
}

function CommitBlock({commit}) {
    return <div tabIndex={0} className={`commit ${getCommitColorClass(commit)}`} title={`${commit} contributions`}>{}</div>
}

function getCommitColorClass(num) {
    if (num === 0) {
        return "no-commits"
    } 
    else if (num < 11) {
        return "less-than-11-commits"
    }
    else if (num < 21) {
        return "less-than-21-commits"
    } 
    else {
        return "more-than-20-commits"
    }
}

function parseCommits(commits) {
    if (commits.length === 0) return []
    const grid = []
    let week = []
    commits.forEach((commit) => {
        if (week.length < 7) {
            week.push(commit)
        } else {
            grid.push(week)
            week = [commit]
        }
    })
    grid.push(week)
    return grid
}