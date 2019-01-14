using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {

    public float speed = 8f;
    public float jumpForce = 550f;
    private bool facingRight = true;

    public LayerMask layerGround;
    private bool isGrounded = false;
    public Transform groundCheck;

    private float jumpTimeCounter;
    public float jumpTime;
    private bool isJumping;

    private Rigidbody2D rb;

    void Start () {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update () {

        isGrounded = Physics2D.Linecast(transform.position, groundCheck.position, layerGround);

        if(Input.GetKeyDown(KeyCode.Space) && isGrounded) {
           isJumping = true;
           jumpTimeCounter = jumpTime;
           rb.velocity = Vector2.up * jumpForce;
        }

        if (Input.GetKey(KeyCode.Space) && isJumping) {
            if(jumpTimeCounter > 0){
                rb.velocity = Vector2.up * jumpForce;
                jumpTimeCounter -= Time.deltaTime;
            } else {
                isJumping = false;
            }
        }

        if(Input.GetKeyUp(KeyCode.Space)){
            isJumping = false;
        }
    }

    void FixedUpdate()
    {
        float move = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(move * speed, rb.velocity.y);

        if (!facingRight && move > 0 || move < 0 && facingRight) {
            Flip();
        }
    }

    void Flip() {
        facingRight = !facingRight;
        transform.localScale = new Vector2(-transform.localScale.x, transform.localScale.y);
    }
}

