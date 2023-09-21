using System;
using System.Collections.Generic;

namespace SoNo_Data.Models;

public partial class User
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public string? Password { get; set; }

    public string? FullName { get; set; }

    public string? DisplayName { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }
}
