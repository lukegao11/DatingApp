using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Username { get; set; } //lowercase (u)sername still bind in js
        [Required]
        public string Password { get; set; }
    }
}


