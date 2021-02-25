import jobsList from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  var jobs = jobsList

  // @todo: implement filters and search
  const searchCondition = (item, query) => {
    var found = false
    for (var i = 0; i < Object.keys(item).length; i++) {
      try {
        if (item[Object.keys(item)[i]].toLowerCase().includes(query.toLowerCase())) {
          found = true
          break
        }
      }
      catch (e) {
      }
    }
    return found;
  }

  if (req.query.search) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => searchCondition(item, req.query.search))) {
        job.items = job.items.filter((item) => searchCondition(item, req.query.search))
        return true
      }
    })
  }
  if (req.query.type) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.job_type === req.query.type)) {
        job.items = job.items.filter((item) => item.job_type === req.query.type)
        return true
      }
    })
  }
  if (req.query.department) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.department.includes(req.query.department))) {
        job.items = job.items.filter((item) => item.department.includes(req.query.department))
        return true
      }
    })
  }
  if (req.query.schedule) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.work_schedule === req.query.schedule)) {
        job.items = job.items.filter((item) => item.work_schedule === req.query.schedule)
        return true
      }
    })
  }

  if (req.query.experience) {
    jobs = jobs.filter((job) => {
      if (job.items.some((item) => item.experience === req.query.experience)) {
        job.items = job.items.filter((item) => item.experience === req.query.experience)
        return true
      }
    })
  }

  const makeSortedList = (sortedItems) => {
    var newJobList = []
    if (sortedItems.length > 0) {
      sortedItems.map((value) => {
        if (newJobList.some((item) => item.name === value.name)) {
          newJobList.find((jobGroup) => jobGroup.name == value.name)?.items.push(value)
        } else {
          newJobList.push({ name: value.name, items: [value] })
        }
      })
    }

    return newJobList

  }

  if (req.query.sort_experience) {
    var jobItems = []
    var count = 0
    jobs.map((job) => {
      count += job.items.length
      jobItems = [...jobItems, ...job.items]
    })
    jobItems = jobItems.sort(function (a, b) {
      var nameA = a.experience.toLowerCase(), nameB = b.experience.toLowerCase();
      if (req.query.sort_experience == 'desc' && nameA > nameB)
        return -1;
      else if (req.query.sort_experience == 'asc' && nameB > nameA)
        return -1;
      else return 0;
    });


    jobs = makeSortedList(jobItems)
    console.log(count)
    console.log(jobItems.length)
    var cc = 0
    jobs.map((job) => {
      cc += job.items.length
    })
    console.log(cc)

  }

  if (req.query.sort_location) {
    var jobItems = []
    jobs.map((job) => {
      jobItems = [...jobItems, ...job.items]
    })
    jobItems = jobItems.sort(function (a, b) {
      var nameA = a.city.toLowerCase(), nameB = b.city.toLowerCase();
      if (req.query.sort_location == 'desc' && nameA > nameB)
        return -1;
      else if (req.query.sort_location == 'asc' && nameB > nameA)
        return -1;
      else return 0;
    });
    jobs = makeSortedList(jobItems)
  }

  if (req.query.sort_role) {
    var jobItems = []
    jobs.map((job) => {
      jobItems = [...jobItems, ...job.items]
    })
    jobItems = jobItems.sort(function (a, b) {
      var nameA = a.job_title.toLowerCase(), nameB = b.job_title.toLowerCase();
      if (req.query.sort_role == 'desc' && nameA > nameB)
        return -1;
      else if (req.query.sort_role == 'asc' && nameB > nameA)
        return -1;
      else return 0;
    });

    jobs = makeSortedList(jobItems)
  }

  if (req.query.sort_department) {
    var jobItems = []
    jobs.map((job) => {
      jobItems = [...jobItems, ...job.items]
    })
    jobItems = jobItems.sort(function (a, b) {
      var nameA = a.department[0].toLowerCase(), nameB = b.department[0].toLowerCase();
      if (req.query.sort_department == 'desc' && nameA > nameB)
        return -1;
      else if (req.query.sort_department == 'asc' && nameB > nameA)
        return -1;
      else return 0;
    });

    jobs = makeSortedList(jobItems)
  }

  if (req.query.sort_education) {
    var jobItems = []
    jobs.map((job) => {
      jobItems = [...jobItems, ...job.items]
    })
    jobItems = jobItems.sort(function (a, b) {
      var nameA = a.required_credentials[0].toLowerCase(), nameB = b.required_credentials[0].toLowerCase();
      if (req.query.sort_education == 'desc' && nameA > nameB)
        return -1;
      else if (req.query.sort_education == 'asc' && nameB > nameA)
        return -1;
      else return 0;
    });

    jobs = makeSortedList(jobItems)
  }

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({ jobs: jobs })
}
