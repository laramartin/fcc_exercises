function telephoneCheck(str) {
  // check 555-555-5555
  if (str == str.match(/1? ?\d{3}-\d{3}-\d{4}/)){
    return true;
  }
  // check (555)555-5555
  else if (str == str.match(/1? ?\(\d{3}\)\d{3}\-\d{4}/)){
    return true;
  }
  // check (555) 555-5555
  else if (str == str.match(/1? ?\(\d{3}\)\s\d{3}\-\d{4}/)){
    return  true;
  }
  // check 555 555 5555
  else if (str == str.match(/1? ?\d{3}\s\d{3}\s\d{4}/)){
    return true;
  }
  // check 5555555555
  else if (str == str.match(/1? ?\d{10}/)){
    return true;
  }
  return false;
}
