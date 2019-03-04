using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {

    public float speed = 7f;
  //  public float jumpForce = 10f;
    private bool facingRight = true;	
    public GameObject cameraMove;
    public Transform[] targetCamera;
    private int cont=1;
    public float cameraspeed = 1f;
    //public LayerMask layerGround;
    //private bool isGrounded = false;
    //public Transform groundCheck;

    //private float jumpTimeCounter;
   // public float jumpTime;

    public float fallMultiplier = 2.5f;
    public float lowJumpMultiplier = 2f;

    private bool isJumping;
    private Rigidbody2D rb;

    void Start () {       
        rb = GetComponent<Rigidbody2D>();
    }

    void Update () {

    	if(rb.velocity.y < 0){
    		rb.velocity += Vector2.up * Physics2D.gravity.y * (fallMultiplier - 1 ) * Time.deltaTime;
    	}else if(rb.velocity.y > 0 && !Input.GetButton("Jump")){
    		rb.velocity += Vector2.up * Physics2D.gravity.y * (lowJumpMultiplier - 1 ) * Time.deltaTime;
    	}
    	/*if(transform.position.y >= targetCamera[cont-1].transform.position.y-8){
    		cameraMove.transform.localPosition = Vector3.MoveTowards(cameraMove.transform.position, targetCamera[cont-1].transform.position, Time.deltaTime * cameraspeed / 2);
    		cont++;
    	}else
    		cont--;*/
    	
    }
       /* isGrounded = Physics2D.Linecast(transform.position, groundCheck.position, layerGround);

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
    }*/

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

